import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  ngOnInit():void{
    // const sections = document.querySelectorAll('section');
    // const navLinks = document.querySelectorAll('.nav-link');

    // const options = {
    //   threshold: 0.9
    // };

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       navLinks.forEach(link => {
    //         link.classList.remove('active');
    //       });
    //       const activeLink = document.querySelector(`#link-${entry.target.id}`);
    //       console.log(activeLink);
    //       if (activeLink) {
    //         console.log(entry.target.id)
    //         console.log(activeLink)
    //         activeLink.classList.add('active');
    //       }
    //     }
    //   });
    // }, options);

    // sections.forEach(section => {
    //   observer.observe(section);
    // });
  }
  
  // onHover(target:string){
  //   console.log(target)
  // }
}
