# Ada Pets Node

<!-- Note: this was based on Ada Pets React no the other way around. -->

## At a Glance

- Individual, [stage 1](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md#stage-1) project.
- To be completed in class on **DATE**. No pull request is required.

## Learning Goals

* Reading and understanding existing JavaScript code
* Using axios to read data from an API in JavaScript
* Parsing through an API response in JavaScript and extracting desired information
* Using axios to write data to an API in JavaScript

## Introduction

Ada Lovelace is starting a pet rescue service advertising pets in need of rescue via an API and is building a CLI app.   This app should load the list of pets automatically and present a menu with options.   The user should be able to list all pets, select a pet and see details, add new pets and remove a pet from the App once adopted.  

She's managed to figure out the CLI parts on her own but needs your help with the API requests.  

### Setup

1. Fork and clone this repository
2. Run `npm install` to install dependencies
3. Run the app with `node src/main.js`

### Layout

You will be adding your code to `src/main.js`.  You should read through this file to start to get an idea of the basics of how it works.  All of the functions you need to implement are currently there, just with empty bodies.

There are tests for each of the waves in the `test/` directory, there is one file per wave.  For example you can run the Wave 1 tests with `jest test/wave1.test.js`.

## Wave 1: List Pets

Before we start doing things like looking at individual pets we want to be able to get a list of all of the pets.

To do this fill out the `listPets` function.  This will need to make a call to the Pets API and should return a list of objects containing the pet's `id`, `name` and `species`.  This should [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) an error if it fails.

You can run the Wave 1 tests with `jest test/wave1.test.js`.  Once these are passing move on to Wave 2.

### Functions to complete

* `listPets` (uses Pets API)

## Wave 2: Details

We now want to be able to look at individual pets.  Like in Slack CLI we're going to want to select a given pet before we ask for details on one.  To do this we're going to fill out a few functions that we're creating within a closure.

<!-- TODO: Do we want to avoid the closure issue by either filling out `selectPet` or making `showDetails` (and `removePet` take a `petId`? -->

The first is `selectPet` which will want to update the `selectedPet` variable inside the closure.  You will need to keep track of the selected pet's `id` here, though you could store other information there if you'd like.

The second part is filling out the `petDetails` function.  This will need to make a call to the Pets API and should return details for the pet.  This should [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) an error if it fails.

You can run the Wave 2 tests with `jest test/wave2.test.js`.  Once these are passing move on to Wave 3.

### Functions to complete

* `selectPet`
* `showDetails` (uses Pets API)

## Wave 3: Remove Pet

Once a pet is adopted we don't still want to show it on the list.  (We don't want people fighting over the same pet after all :winky-face:.)

To do this fill out the `removePet` function.  This will need to call to the Pets API to remove the pet.  This should [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) an error if it fails.

You can run the Wave 3 tests with `jest test/wave3.test.js`.  Once these are passing move on to Wave 4.

### Functions to complete

* `removePet` (uses Pets API)

## Wave 4: Add a Pet

Sometimes we'll have new pets that want to be adopted.  

To do this fill out the `addPet` function.  This will need to call the Pets API to add the pet.  This should [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) an error if it fails.

You can run the Wave 4 tests with `jest test/wave4.test.js`.  Once these are passing you're done!  :tada:

### Functions to complete

* `addPet` (uses Pets API)
