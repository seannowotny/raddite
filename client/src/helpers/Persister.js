// @flow

export default class Persister
{
   constructor(stateName_: string)
   {
      this.stateName = stateName_;
   }

   persist = (data_: any) =>
   {
      let data = {state: {}};
      const ls = localStorage.getItem('state');
      if(ls)
      {
         data = ls;
      }
      data.state[this.stateName] = data_;
      localStorage.setItem('state', JSON.stringify(data));
   }
}