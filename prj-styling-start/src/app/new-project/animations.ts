import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'green'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'red'
  })),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)'
      })),
      animate(200, style({
        backgroundColor: 'green'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]);


export const formStateTrigger = trigger('formState', [
  transition('* => *', [
    query('input.ng-invalid: focus',[
      animate(200, style({
        backgroundColor: 'red'
      })),
      animate(200)
    ], {optional: true})
  ])
])
