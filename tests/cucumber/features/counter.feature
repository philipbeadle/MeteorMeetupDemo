Feature: Increase the counter value
  The "Click Me" button will increase the counter
  value in the message each time it is clicked.

  Background:
    Given I am a new user

  @dev
  Scenario: Click the button
    When I navigate to "/"
    And I click the "Click Me" button
    Then the message will say "You've pressed the button 1 times."
