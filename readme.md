vite and Parcel -- bundular that hold combination of various js files


# React
## react -dom (web)
## react -native (mobile)


# NPM (Node package manager) 

# NPX (node package executer) -- when you only want to execute not install package

##  create-react-app -- utility (software)

# Instalance

## 1. npx create-react-app 01_basic  (old way of buiding project as this is very bulky , unnecessery files also given here so we use vite )

## npm run start

## npm run build  
-- whatever js written in react come in build folder (this build folder is serve to all user not source folder )


# Important 

## web-vitals -- 
check the performance(track)

## script --
script hi hai jo actually me project ko chalati hai

## eslintConfig --
not give error but give red line showes that even more better code is possible


# vite project

## dev dependency -- use during development only

## package-lock.json -- json file with lock depedency

## mainfest file -- mobile (see meta text)

## ReactDOM -virtual dom

## react-script -- javascript  implemented 

## Virtual DOM
React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.

## React Fiber
https://github.com/acdlite/react-fiber-architecture

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

# reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.(browser and react tree(createroot))


