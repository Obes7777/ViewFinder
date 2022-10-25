export default class Activity{
    emotion
    motion
    img
    item
    misc
    func
    constructor(emotion, motion, state, item, misc, func){
        this.emotion = emotion
        this.motion = motion
        this.state = state
        this.item = item
        this.misc = misc
        this.func = func
    }
}