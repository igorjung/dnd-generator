import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { SheetComponent } from '../shared/components/sheet/sheet.component';
import { IMonster, IMonsterList } from '../shared/interfaces/Monster';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [
    HttpClientModule,
    SheetComponent,
    LoadingComponent
  ],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss'
})
export class MonstersComponent implements OnInit {
  request!: Observable<IMonster>
  url = 'https://www.dnd5eapi.co'

  monster: IMonster | null = null

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.getMonster().subscribe(response => this.monster = response)
  }

  private getMonster() : Observable<IMonster> {
    return this.request = this.http.get<IMonsterList>(`${this.url}/api/monsters`).pipe(
      switchMap(({ results, count }) => {
          const randomIndex = Math.floor(Math.random() * count) + 1
          const randomMonster = results[randomIndex].index
          return this.http.get<IMonster>(`${this.url}/api/monsters/${randomMonster}`)
        }
      )
    )
  }

  generateNewMonster(): void {
    this.monster = null
    this.getMonster().subscribe(response => this.monster = response)
  }
}
