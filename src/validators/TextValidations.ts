import { FormControl} from '@angular/forms';

export class TextValidations{

  static checkFirstName(control:FormControl):any{
    debugger;
    if(control.value==""){
      return {'errorString': 'Empty'}
    }else if(control.value.length<3){
        return {'errorString': 'should be more than 3'}
    }
    else{
      return null;
    }
  }
}
