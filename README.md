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

**Note: Because Axios is asynchronous we will need to use `setResult` instead of returning results and `setError` instead of throwing errors.**

## Wave 1: List Pets

Before we start doing things like looking at individual pets we want to be able to get a list of all of the pets.

To do this fill out the `listPets` function.  This will need to make a call to the Pets API and should `setResult` a list of objects containing the pet's `id`, `name` and `breed` and should `setError(new PetsApiError())` if the request fails.

You can run the Wave 1 tests with `jest test/wave1.test.js`.  Once these are passing move on to Wave 2.

These tests use a mocking library to do what we used VCR to do in Ruby.  In each test you'll see a `mock.onGet` or `mock.onPost` to set up what should happen for that particular test before the actual assertions.

### Function to complete

* `listPets`

## Wave 2: Details

We now want to be able to look at individual pets.  Like in Slack CLI we're going to want to select a given pet before we ask for details on one.  To do this we're going to fill out a few functions that we're creating within a closure.  There is a provided function `selectPet` that will prompt you for a pet's `id` and save it.

To do this you will need to fill out the `petDetails` function.  This will need to make a call to the Pets API and should `setResult` and object with details for the pet and should `setError(new PetsApiError())` if the request fails.

You can run the Wave 2 tests with `jest test/wave2.test.js`.  Once these are passing move on to Wave 3.

### Function to complete

* `showDetails`

## Wave 3: Remove Pet

Once a pet is adopted we don't still want to show it on the list.  (We don't want people fighting over the same pet after all :winky-face:.)

To do this fill out the `removePet` function.  This will need to call to the Pets API to remove the pet.  This should `setResult` with a success message if this works and should `setError(new PetsApiError())` if the request fails.

You can run the Wave 3 tests with `jest test/wave3.test.js`.  Once these are passing move on to Wave 4.

### Function to complete

* `removePet`

## Wave 4: Add a Pet

Sometimes we'll have new pets that want to be adopted.  

To do this fill out the `addPet` function.  This will need to call the Pets API to add the pet.  This should `setResult` with a success message if this works and should `setError(new PetsApiError())` if the request fails.

You can run the Wave 4 tests with `jest test/wave4.test.js`.  Once these are passing you're done!  :tada:

### Function to complete

* `addPet`
