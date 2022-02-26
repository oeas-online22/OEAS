import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Exam, ExamList } from '@batstateu/data-models';
import { ExamsService } from '@batstateu/shared';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
} from 'rxjs';
@Component({
  selector: 'batstateu-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamsComponent implements OnInit {
  examList: Exam[] = [];
  private searchSubject$ = new BehaviorSubject<string>('');

  getAll(criteria: string) {
    this.examService.getAll(criteria).subscribe((val) => {
      this.examList = [...val];
      this.cd.detectChanges();
    });
  }
  delete(id: number) {
    alert(id);
  }
  onSearch(criteria: string) {
    this.searchSubject$.next(criteria);
  }
  constructor(
    private examService: ExamsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAll('');

    this.searchSubject$
      .asObservable()
      .pipe(
        map((val) => val.trim()),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.getAll(val);
      });
  }
}
