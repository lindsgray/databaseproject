import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'movies-comp',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    this.movies = [{
      title: "Black Swan",
      year: 2010,
      genre: "drama",
      description: "Academy Award Winner Natalie Portman plays Nina, a stunningly talented but dangerously unstable ballerina on the verge of stardom. Pushed to the breaking point by her driven artistic director (Vincent Cassel) and the threat posed by a seductive rival dancer (Mila Kunis), Nina's tenuous grip on reality starts to slip away - plunging her into a waking nightmare.",
      review: {
        Anticipation: "4/5 - the first time I watched it. This review is based on the second time I've seen it.", 
        Enjoyment: "5 / 5 - I am blown away by Portman's portrayed neurosis every time. Kunis provides an outstanding supporting performance as well.", 
        inRetrospect: "5/5 -flawless directing by Aronofsky with beautiful camera angles that capture the fragility of the production.",
        content: "Darren Aronofsky is the master of subjectivity in Black Swan, which is to say that the film is driven by Portman into it's plot. It would have been easy to make the story an exposé on the ballet industry or the labor intensive lives that ballet dancers live (as it is shot similarly to a documentary style), but he doesn't do that explicitly so much as he tells a story first and foremost. He chooses instead to be more psychological, exposing the neurosis of Portman's character as she transforms. The myth of Swan Lake (the production being illustrated in Black Swan) is a tale of transformation. A girl is transformed into a swan and only true love can save her. When she finds a prince and she thinks she has sealed the deal, she finds he has been seduced by her evil twin, the black swan. Devastated, the white swan kills herself, seemingly finding peace in the end. In Swan Lake the white and black swans are played by the same dancer, meaning this dancer has to have two sides to herself; a classical, innocent side and a free-forming, lustful side. Portman's demise comes from her neurosis differentiating the two swans and differentiating reality from her psychosis.Her character sees this psychotic transformation as a beautiful thing that has happened even though it all but destroys her. The subject of surrealism can also be talked about when discussing Aronofsky's direction of the film. Some of his most successful shots are due to the stereotypical horror mirror trick. We can see Portman's character as we believe her to be doing something completely different than her reflection shows. We see the mirror being used to transform characters into one another (i.e. Kunis' reflection is in the mirror, but when she turns around it's Portman). We can seen any shiny surface (such as a stage floor) being used to mirror whatever is touching it, creating a creepy double effect. The movie is shot so simply but made beautifully whole in post - production.Aronofsky moves the camera before he moves the actors and in doing so he gives himself very stylistic control. Everything else is just ambiance.The  live action effects (makeup) and digital effects (CGI transformations) are given life because of how Aronofsky incorporates chilling music and incredible sound effects.We can hear bones crunching and feathers ruffling. Take the obvious editing tricks of the film and pair that with Portman's neurosis and it's impossible to tell what's real and what isn't.The run time (1:48) is fast and always moving, like a pirouette, keeping the audience on it's toes and onto the next act, so before we know it we're in the final scene.The subjectivity that Aronofsky creates is a surreal and visceral experience.This was a very stylistic movie and a good one at that. "},
        thumbnail: "../../assets/img/blackswan.jpg",
        trailer: "https://www.youtube.com/embed/5jaI1XOB-bs"
    }]
  }

}
