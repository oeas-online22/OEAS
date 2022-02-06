import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamListComponent } from './components/exam-list/exam-list.component';

import { ExamTakersListComponent } from './components/exam-takers-list/exam-takers-list.component';
import { ExamRecordingViewComponent } from './components/exam-recording-view/exam-recording-view.component';
import { ExamResultListComponent } from './components/exam-result-list/exam-result-list.component';
import { ExamResultComponent } from './containers/exam-result/exam-result.component';
import { ExamRecordingComponent } from './containers/exam-recording/exam-recording.component';
import { ExamTakersComponent } from './containers/exam-takers/exam-takers.component';
import { ExamItemPointsComponent } from './containers/exam-item-points/exam-item-points.component';
import { ExamFormViewComponent } from './components/exam-form-view/exam-form-view.component';
import { ExamFormComponent } from './containers/exam-form/exam-form.component';
import { ExamItemPointsFormViewComponent } from './components/exam-item-points-form-view/exam-item-points-form-view.component';
import { ExamsComponent } from './containers/exams/exams.component';
import { NgZorroAntdModule } from '@batstateu/ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ExamsComponent},
      {path: ':id/form', component: ExamFormComponent},
      {path: 'form', component: ExamFormComponent},
      {path: 'item-points', component: ExamItemPointsComponent},
      {path: 'recording', component: ExamRecordingComponent},
      {path: 'result', component: ExamResultComponent},
      {path: ':id/takers', component: ExamTakersComponent} 
    ]),
  ],
  declarations: [
    ExamListComponent,
    ExamFormComponent,
    ExamTakersListComponent,
    ExamItemPointsFormViewComponent,
    ExamRecordingViewComponent,
    ExamResultListComponent,
    ExamResultComponent,
    ExamRecordingComponent,
    ExamTakersComponent,
    ExamItemPointsComponent,
    ExamFormViewComponent,
    ExamItemPointsFormViewComponent,
    ExamsComponent
  ],
})
export class ExamsModule {}
