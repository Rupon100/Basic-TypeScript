// Abstraction
/*
Abstraction hides complex implementation and only exposes essential features.
The user interacts with what something does, not how it does it.

In TypeScript, abstraction is mainly achieved using:
- Abstract Classes
- Interfaces

1. Abstraction using Abstract Class
An abstract class:
- Cannot be instantiated directly.
- Can have abstract methods (must be implemented by child class).
- Can have normal concrete methods as well.


2. Abstraction using Interface
- Interfaces only define shape/structure, no implementation.
*/


// using interface
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}
// implementation
class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log(`playing music...`)
    }
    pause(): void {
        console.log(`Music Pause!`);
    }
    stop(): void {
        console.log(`Music Stop...`)
    }
}
const ruponPlayer = new MusicPlayer();
ruponPlayer.stop()


// using abstract class
abstract class BanglaMusic{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void
}
class RockMusic extends BanglaMusic {
    play(): void {
        console.log('Bangla Rock playing...');
    }
    pause(): void {
        console.log('Bangla Rock pause');
    }
    stop(): void {
        console.log('Bangla Rock Stop!');
    }
}
const musicInstance = new RockMusic();
musicInstance.play()










