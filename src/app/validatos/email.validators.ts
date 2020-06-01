import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl){
    const uno = (control.value.indexOf('@') >= 0) ;
    const dos = control.value.endsWith('.com') ||
                control.value.endsWith('.es') ||
                control.value.endsWith('.org');

    const tres = (control.value.indexOf('muyoc.com') === -1);

    if (!uno || !dos || !tres){
        return {validUrl: true};
    }
    return null;
}
