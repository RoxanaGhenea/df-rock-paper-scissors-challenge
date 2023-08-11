# RPS Challenge - Thought Process and Credits

### Credits:
1. Battle Demo - most credit goes to the walkthrough, thank you very much for that.
2. Chatgpt - I used it as I faced some issues with a couple tests and I could not find a similar issue on stackoverflow, and unfortunately I have not been able to catch up so well to figure it out on my own.
3. [adding .css file to ejs](https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs)
4. [Express4. What's the difference between app.locals, res.locals and req.app.locals?](https://stackoverflow.com/questions/35111143/express4-whats-the-difference-between-app-locals-res-locals-and-req-app-local?fbclid=IwAR1TO45xXrjTP7JHLAnUJekUxNSQjLPChhcoXMmEIZv6Pv4hp7NM3ldEoEo)
5. [app.locals and res.locals life cycle](https://stackoverflow.com/questions/14642692/app-locals-and-res-locals-life-cycle)

### Self-evaluation:
1. I acknowledge that the code's structure requires improvement. The decoupling process has been deferred due to my ambitious goals of working on the extended criteria which eventually led to me running out of time.
2. Enhancing the website's styling would have been beneficial.
3. There is potential to expand the test suite further.
4. A comprehensive review of this module is needed.
5. Achieving a balance between personal life and work has been challenging. This has led me to invest way more time than advised on all projects up to date, contributing to a sense of exhaustion that's visible on the performance of this project.


### User stories domain model:

| Objects    | Properties               | Message                                         | Output   |
| ---------- | ------------------------ | ----------------------------------------------- | -------  |
| Player     | name                     |                                                 | @Void    |
| RPSGameSet | players[]                | setup(playerNames@string[], playerClass@Player) | @Void    |
|            | playerChoices[]          | clear()                                         | @Void    |
|            | _initialFirstPlayerScore | setMatchesRounds(@number)                       | @Number  |
|            | initialSecondPlayerScore | getChoiceLabel(@number)                         | @String  |
|            | _matchesNo               | gameStops()                                     | @Boolean |
|            |                          | firstPlayer()                                   | @String  |
|            |                          | firstPlayerChoice()                             | @Number  |
|            |                          | firstPlayerScore(@boolean)                      | @Number  |
|            |                          | secondPlayer()                                  | @String  |
|            |                          | secondPlayerChoice()                            | @Number  |
|            |                          | secondPlayerScore(@boolean)                     | @Number  |
|            |                          | announceWinner()                                | @String  |
| RPSResult  |                          | player1Wins()                                   | @Boolean |
|            |                          | player2Wins()                                   | @Boolean |


### Data Flow:
Client
(1) Form submission
↓

indexRouter
(2) Display index page
(3) Form submission to /1stPlayer
↓

firstPlayerRouter
(5) Display first player input form
(6) Form submission to /1stPlayer
↓

secondPlayerRouter
(8) Display second player input form
(9) Form submission to /playerChoices
↓

playerChoicesRouter
(11) Process player choices and calculate result
(12) Render game result or continue to next round
↓
(13) Render game result or continue

CleanupRouter
(14) Clear game data
(15) Redirect to /
↓

indexRouter
(16) Display index page













