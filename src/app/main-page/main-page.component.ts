import { Component , OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  activeSelection:string = 'about';
  currentPhotoType:string = 'about';
  currentPhotoDataId:number = 0;
  currentPhotoUrl:string = '';
  currentPhotoDescription:string = '';
  photoData:any[]=[ { type:'project1',
                      data: [ {url:'assets/pic/mockup_ncare01.jpg',description:'nCare Chat App'},
                              {url:'assets/pic/mockup_ncare02.jpg',description:'nCare Chat Website Form Login'},
                              {url:'assets/pic/mockup_ncare03.jpg',description:'nCare Chat Website Main'},
                              {url:'assets/pic/mockup_ncare04.jpg',description:'nCare Chat Mobile'},
                            ]
                    },
                    { type:'project2',
                      data: [ {url:'assets/pic/mockup_botpy01.jpg',description:'Telegram Bot Message'},
                              {url:'assets/pic/mockup_botpy02.jpg',description:'Telegram Bot Data Input Html'},
                              {url:'assets/pic/mockup_botpy03.jpg',description:'Telegram Bot Data Output Csv'},
                              {url:'assets/pic/mockup_botpy04.jpg',description:'Telegram Bot Data Input Open in Notepad'},
                              {url:'assets/pic/mockup_botpy05.jpg',description:'Telegram Bot Data Output Open in Notepad'},
                            ]
                    },
                    { type:'project3',
                      data: [ {url:'assets/pic/mockup_card01.jpg',description:'Greeting Card Preview'},
                              {url:'assets/pic/mockup_card02.jpg',description:'Greeting Card Dialog'},
                            ]
                    },
                    { type:'project4',
                      data: [ {url:'assets/pic/mockup_game01.jpg',description:'Game Title Screen'},
                              {url:'assets/pic/mockup_game02.jpg',description:'Game Dialog'},
                              {url:'assets/pic/mockup_game03.jpg',description:'Game Tutorial'},
                              {url:'assets/pic/mockup_game04.jpg',description:'Game Puzzle Mode'},
                            ]
                    },
                   
  ];
  isPhoneMode = false;
  ngOnInit() {
    this.updateIsPhoneMode();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateIsPhoneMode();
  }

  private updateIsPhoneMode() {
    this.isPhoneMode = window.innerWidth <= 767;
  }

  checkIsPhoneMode(): boolean {
    return this.isPhoneMode;
  } 

  previousImage(){
    const maxId = this.getLengthIndex_currentPhotoDataId()
    if (this.currentPhotoDataId <= 0)
    { this.currentPhotoDataId = maxId - 1
    }
    else
    { this.currentPhotoDataId -= 1;
    }
    this.update_url_description_photo();
  }
  
  nextImage(){
    const maxId = this.getLengthIndex_currentPhotoDataId()
    if (this.currentPhotoDataId >= maxId - 1)
    { this.currentPhotoDataId = 0
    }
    else
    { this.currentPhotoDataId += 1;
    }
    this.update_url_description_photo();
  }

  updateActiveSelection(updated:string){
    if (updated != 'about'){
      if (this.activeSelection != updated)
        { this.activeSelection = updated
          this.changingActiveSelection() 
        }
    }
    
  }

  updateActiveOnHover(updated:string){
    if (updated != 'about'){
      if (this.activeSelection != updated)
        { this.activeSelection = updated
          this.changingActiveSelection() 
        }
    }
  }

  changingActiveSelection(){
    if (this.currentPhotoType != this.activeSelection)
      {   this.currentPhotoType = this.activeSelection
          this.currentPhotoDataId = 0
          this.update_url_description_photo()
      }
  }

  update_url_description_photo(){
    const projectNow = this.photoData.find(project => project.type === this.currentPhotoType);
    if ( projectNow.data.length == 0 )
    { this.currentPhotoUrl = ''
      this.currentPhotoDescription = ''
    }
    else {
      this.currentPhotoUrl = projectNow.data[this.currentPhotoDataId].url
      this.currentPhotoDescription = projectNow.data[this.currentPhotoDataId].description
    }
  }

  getLengthIndex_currentPhotoDataId():number{
    const projectNow = this.photoData.find(project => project.type === this.currentPhotoType);
    return projectNow.data.length
  }

}
