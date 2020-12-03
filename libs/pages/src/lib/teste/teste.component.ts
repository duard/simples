import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '@simples/api-interfaces';

@Component({
  selector: 'simples-pages-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/testes');
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log('goiabada');
  }
}
