# Counter

Example of different Javascript frameworks communicating state through Redux.

# Don't rewrite the app state again

Javascript developers in 2017 suffer from framework fatigue. Google it. 

A terrible symptom of this is that there's more app rewrites than is healthy for anyone. They cost money, time and satisfaction. 
One of the toughest and most error prone things to rewrite in a Javascript application is domain logic. The business rules. If this, then that.
If you keep your app state in framework du jour, and you have a need to change your framework, there goes your state with it.

So don't do it. Don't keep your app state in your framework du jour. This needs to be the longest lived element of the application. It needs to be portable, and extendable.
Keep it in the Plainest Javascript you can. Make few assumptions, a small interface.

# Redux

One such close to Plain Javascript approach to state management is the Redux pattern. Yes, it's a library too, but the pattern is important. You can implement it without the lib if you like. It's just that you'd come to a similar outcome anyway.

# React, Angular and Redux

React and Angular are a couple of popular frameworks today. They have different responsibilities. One is presentation layer with potential overuse of local state, and the other one is full frameworks which covers almost everything if you strictly follow it.
Counter is an example of how to share state management between the two of them through Redux. So say we want or need using Web Components, or Polymer, or something else? We can keep all the hard work put in state management. By improving and evolving the state code we are delivering a more stable, and fully featured progream then we would rewriting it again.

