import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '@simples/api-interfaces';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/testes');
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('goiabada');
  }
}
