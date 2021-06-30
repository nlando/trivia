# trivia

This is a web page that pulls trivia questions and answers from an API. The topic and difficulty of the questions can be changed through a simple change of the API link. You can play for as long as you like, or at the very least until you've seen every single trivia question the API has to offer.


---

#### Technologies Used

- JavaScript
- jQuery
- HTML
- CSS
- APIs
- Google fonts

---

## The Data

The data for this page is pulled from the Open Trivia Database API [https://opentdb.com/].

It pulls questions by topic and difficulty. I didn't try pulling various topics and difficulties into the same game, but that is something I want to try in the future.

I gathered and displayed the questions by using jQuery to access them in the data and appending them to a piece of the HTML. I did the same with the answers. 

## Stretch goals

Here are some goals I have for the future:

- Have a way to change the topic or difficulty of the trivia through buttons on the UI
- Have a score display for each correct answer
- Have the correct answer display in a different spot every time
