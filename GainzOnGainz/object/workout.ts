export class Workout {
    public name:String = '';
    public type:String = '';
    public subType:String = '';
    public date:String = '';
    public workoutList : Array<WorkoutDetails>;     

    constructor(data: Partial<Workout>) {
      Object.assign(this, data);
  }
}

export class WorkoutDetails {
  public weight:number = 0;
  public number:number = 0;
  public rest:number = 0;
}
  