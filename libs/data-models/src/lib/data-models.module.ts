import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './authenticate';
export { User } from './user';
export { ExamList } from './exam-list';
export { ExamTakerList } from './exam-taker-list';
export { ExamTakerResultList } from './exam-taker-result-list';
export { QuestionList } from './question-list';
export { UserList } from './user-list';
export { ExamState } from './exam-state';
export { TakeExamControlState } from './take-exam-control-state';
export { UserDetail } from './user-detail';
export { ResponseWrapper } from './response-wrapper';
@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
