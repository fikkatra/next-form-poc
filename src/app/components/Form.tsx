'use client';

import { submitForm } from '../actions/validateFormAction';

export function Form() {
  return (
    <form action={submitForm} className='flex flex-col gap-2 items-start'>
      <input name="firstName" id="lastName" placeholder="First name" className='border' />
      <input name="firstName" id="lastName" placeholder="Last name"  className='border'/>
      <input type="submit" className='border bg-slate-100' />
    </form>
  );
}
