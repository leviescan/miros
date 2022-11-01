import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hide:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  actMe(){

    $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  }




  showAlert() {

    Swal.fire({
      title: '<strong>Quienes somos</strong>',
  text: 'Somos: una organización sin ánimo de lucro dedicada a contribuir el desarrollo social de Colombia mediante el desarrollo de programas y proyectos social económico ambiental cultural, individual y colectivo como medio para transformar la sociedad y erradicar la pobreza.',
  width: '800px',
  imageUrl: 'assets/images/logo.jpeg',
  imageWidth: 700,
  imageHeight: 300,
  imageAlt: 'Custom image',
   background: 'rgb(241, 245, 245)',
   confirmButtonColor: '#3085d6',
  confirmButtonText: 'Gracias por conocernos!' ,
  showCloseButton: true,
      
      
    })
  }

  
}
