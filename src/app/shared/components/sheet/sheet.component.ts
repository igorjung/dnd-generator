import { Component, Input, OnInit } from '@angular/core';
import { IMonster, IMonsterProficiencie } from '../../interfaces/Monster';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent implements OnInit {
  @Input() monster!: IMonster

  imageLoading = false
  skills: IMonsterProficiencie[] = []
  savings: IMonsterProficiencie[] = []

  ngOnInit(): void {
    if(this.monster) this.imageLoading = !!this.monster.image
    this.handleProficiencies()
  }

  handleProficiencies() {
    const { proficiencies } = this.monster

    if (proficiencies.length) {
      let skills = proficiencies.filter(item => item.proficiency.name.includes('Skill'))
      let savings = proficiencies.filter(item => item.proficiency.name.includes('Saving'))


      this.skills = skills.map(item => {
        item.proficiency.name = item.proficiency.name.replace('Skill: ', '')
        return item
      })

      this.savings = savings.map(item => {
        item.proficiency.name = item.proficiency.name.replace('Saving Throw: ', '')
        return item
      })
    }
  }
}
