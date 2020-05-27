/***************** 
 * Sequence Test *
 *****************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Sequence';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(InitCodeRoutineBegin());
flowScheduler.add(InitCodeRoutineEachFrame());
flowScheduler.add(InitCodeRoutineEnd());
flowScheduler.add(block1CodeRoutineBegin());
flowScheduler.add(block1CodeRoutineEachFrame());
flowScheduler.add(block1CodeRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var text;
var key_resp;
var InitCodeClock;
var SequenceLength;
var initialization;
var randomtrans;
var transmat1;
var transmat2;
var transmat3;
var transmat4;
var transmat5;
var transmat6;
var transmat7;
var transmat8;
var transitionMatrix;
var transitionGuide;
var randint;
var block1CodeClock;
var trialCodeClock;
var stimulusClock;
var text_2;
var key_resp_2;
var blankscreenClock;
var key_resp_3;
var text_3;
var testClock;
var Question;
var text_4;
var SubmitResponse;
var feedbackClock;
var Feedback;
var blankscreen_2Clock;
var text_5;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Watch the sequences of letters. \nWhen you are certain you know what letter comes next, \nor if you know the sequence is random, press spacebar. \n\nPress spacebar to start experiment',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "InitCode"
  InitCodeClock = new util.Clock();
  
  // set variables
  var SequenceLength, initialization, randomtrans, transitionGuide,  transmat1, transmat2, transmat3, transmat4, transmat5, transmat6, transmat7, transmat8;
  SequenceLength = 20;
  initialization = [(1 / 3), (1 / 3), (1 / 3)];
  randomtrans = [[(1 / 3), (1 / 3), (1 / 3)], [(1 / 3), (1 / 3), (1 / 3)], [(1 / 3), (1 / 3), (1 / 3)]];
  transmat1 = [[0.9, 0.05, 0.05], [0.99, 0.005, 0.005], [0.99, 0.005, 0.005]];
  transmat2 = [[0.005, 0.99, 0.005], [0.05, 0.9, 0.05], [0.005, 0.99, 0.005]];
  transmat3 = [[0.005, 0.005, 0.99], [0.005, 0.005, 0.99], [0.05, 0.05, 0.9]];
  transmat4 = [[0.05, 0.9, 0.05], [0.9, 0.05, 0.05], [0.495, 0.495, 0.01]];
  transmat5 = [[0.05, 0.05, 0.9], [0.495, 0.01, 0.495], [0.9, 0.05, 0.05]];
  transmat6 = [[0.01, 0.495, 0.495], [0.05, 0.05, 0.9], [0.05, 0.9, 0.05]];
  transmat7 = [[0.05, 0.9, 0.05], [0.05, 0.05, 0.9], [0.9, 0.05, 0.05]];
  transmat8 = [[0.05, 0.05, 0.9], [0.9, 0.05, 0.05], [0.05, 0.9, 0.05]];
  transitionMatrix = [randomtrans, transmat1, transmat2, transmat3, transmat4, transmat5, transmat6, transmat7, transmat8];
  transitionGuide = ["Random", "A", "B", "C", "AB", "AC", "BC", "ABC", "BAC"];
  
  // FUNCTIONS 
  
  // generating a sequence 
  function returnsequence(init, transmat, length) {
      var Letters, model;
      model = new hmm.MultinomialHMM({"n_components": 3});
      model.startprob = init;
      model.transmat = transmat;
      model.emissionprob = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      [X, Z] = model.sample(length);
      Letters = np.array([]);
      for (var i = 0, _pj_a = X.length; (i < _pj_a); i += 1) {
          if ((X[i] === 0)) {
              Letters = np.append(Letters, "A");
          } else {
              if ((X[i] === 1)) {
                  Letters = np.append(Letters, "B");
              } else {
                  Letters = np.append(Letters, "C");
              }
          }
      }
      return Letters;
  }
  
  // randomint 
  randint = function(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  // Initialize components for Routine "block1Code"
  block1CodeClock = new util.Clock();
  // Initialize components for Routine "trialCode"
  trialCodeClock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blankscreen"
  blankscreenClock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  Question = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question',
    text: 'What letter comes next? ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: "'A' .... 'B' ... 'C'....\n 'Random ( press x)'",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  SubmitResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  Feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "blankscreen_2"
  blankscreen_2Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text);
    InstructionsComponents.push(key_resp);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function InstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var InitCodeComponents;
function InitCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'InitCode'-------
    t = 0;
    InitCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    InitCodeComponents = [];
    
    InitCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function InitCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'InitCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InitCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InitCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InitCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'InitCode'-------
    InitCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InitCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var transitionMatrixBlock1;
var transitionGuideBlock1;
var numModels;
var block1CodeComponents;
function block1CodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'block1Code'-------
    t = 0;
    block1CodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    var transitionMatrixBlock1,transitionGuideBlock1,numModels
    transitionMatrixBlock1 = [randomtrans, transmat1, transmat2, transmat3, transmat4, transmat5, transmat6];
    transitionGuideBlock1 = ["Random", "A", "B", "C", "AB", "AC", "BC"];
    numModels = transitionMatrixBlock1.length;
    
    // keep track of which components have finished
    block1CodeComponents = [];
    
    block1CodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function block1CodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'block1Code'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = block1CodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block1CodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block1CodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'block1Code'-------
    block1CodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "block1Code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialCodeRoutineBegin(snapshot));
    thisScheduler.add(trialCodeRoutineEachFrame(snapshot));
    thisScheduler.add(trialCodeRoutineEnd(snapshot));
    const stimuliLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(stimuliLoopBegin, stimuliLoopScheduler);
    thisScheduler.add(stimuliLoopScheduler);
    thisScheduler.add(stimuliLoopEnd);
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(blankscreen_2RoutineBegin(snapshot));
    thisScheduler.add(blankscreen_2RoutineEachFrame(snapshot));
    thisScheduler.add(blankscreen_2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var stimuli;
function stimuliLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  stimuli = new TrialHandler({
    psychoJS: psychoJS,
    nReps: $SequenceLength, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'stimuli'
  });
  psychoJS.experiment.addLoop(stimuli); // add the loop to the experiment
  currentLoop = stimuli;  // we're now the current loop

  // Schedule all the trials in the trialList:
  stimuli.forEach(function() {
    const snapshot = stimuli.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(stimulusRoutineBegin(snapshot));
    thisScheduler.add(stimulusRoutineEachFrame(snapshot));
    thisScheduler.add(stimulusRoutineEnd(snapshot));
    thisScheduler.add(blankscreenRoutineBegin(snapshot));
    thisScheduler.add(blankscreenRoutineEachFrame(snapshot));
    thisScheduler.add(blankscreenRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function stimuliLoopEnd() {
  psychoJS.experiment.removeLoop(stimuli);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var ModelIndex;
var ModelTrans;
var Motif;
var Letters;
var count;
var trialCodeComponents;
function trialCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trialCode'-------
    t = 0;
    trialCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    var ModelIndex,ModelTrans,Motif,Letters,count
    
    ModelIndex = randint(0,numModels);
    ModelTrans = transitionMatrixBlock1[ModelIndex];
    Motif = transitionGuideBlock1[ModelIndex];
    Letters = returnsequence(initialization, ModelTrans, SequenceLength);
    count = 0;
    
    // debug
    // console.log(Letters);
    // console.log(Motif);
    
    // keep track of which components have finished
    trialCodeComponents = [];
    
    trialCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trialCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trialCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trialCode'-------
    trialCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trialCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Letter;
var _key_resp_2_allKeys;
var stimulusComponents;
function stimulusRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'stimulus'-------
    t = 0;
    stimulusClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    var Letter
    Letter = Letters[count];
    count++;
    
    text_2.setText(Letter);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(text_2);
    stimulusComponents.push(key_resp_2);
    
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function stimulusRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'stimulus'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'stimulus'-------
    stimulusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_2.keys) {
        stimuli.finished = 1;
    }
    if (key_resp_3.keys) {
        stimuli.finished = 1;
    }
    
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var blankscreenComponents;
function blankscreenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'blankscreen'-------
    t = 0;
    blankscreenClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    blankscreenComponents = [];
    blankscreenComponents.push(key_resp_3);
    blankscreenComponents.push(text_3);
    
    blankscreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function blankscreenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'blankscreen'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = blankscreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankscreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankscreenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'blankscreen'-------
    blankscreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    return Scheduler.Event.NEXT;
  };
}


var _SubmitResponse_allKeys;
var testComponents;
function testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    SubmitResponse.keys = undefined;
    SubmitResponse.rt = undefined;
    _SubmitResponse_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(Question);
    testComponents.push(text_4);
    testComponents.push(SubmitResponse);
    
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Question* updates
    if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index
      
      Question.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *SubmitResponse* updates
    if (t >= 0.0 && SubmitResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SubmitResponse.tStart = t;  // (not accounting for frame time here)
      SubmitResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SubmitResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SubmitResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SubmitResponse.clearEvents(); });
    }

    if (SubmitResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = SubmitResponse.getKeys({keyList: ['a', 'A', 'b', 'B', 'c', 'C', 'x', 'X'], waitRelease: false});
      _SubmitResponse_allKeys = _SubmitResponse_allKeys.concat(theseKeys);
      if (_SubmitResponse_allKeys.length > 0) {
        SubmitResponse.keys = _SubmitResponse_allKeys[_SubmitResponse_allKeys.length - 1].name;  // just the last key pressed
        SubmitResponse.rt = _SubmitResponse_allKeys[_SubmitResponse_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'test'-------
    testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SubmitResponse.keys', SubmitResponse.keys);
    if (typeof SubmitResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SubmitResponse.rt', SubmitResponse.rt);
        routineTimer.reset();
        }
    
    SubmitResponse.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var previousLetter;
var answer;
var motifLocation;
var Correct;
var ColorFeedback;
var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    previousLetter = Letter;
    answer = SubmitResponse.keys;
    answer = answer.upper();
    console.log(answer);
    if ((Motif !== "Random")) {
        motifLocation = (- 1);
        for (var i = 0, _pj_a = Motif.length; (i < _pj_a); i += 1) {
            if ((Motif[i] === previousLetter)) {
                motifLocation = i;
            }
        }
        if ((motifLocation === (- 1))) {
            Correct = "Incorrect";
            ColorFeedback = "red";
        } else {
            if ((motifLocation === (Motif.length - 1))) {
                motifTest = 0;
            } else {
                motifTest = (motifLocation + 1);
            }
            if ((Motif[motifTest] === answer)) {
                Correct = "Correct";
                ColorFeedback = "green";
            } else {
                Correct = "Incorrect";
                ColorFeedback = "red";
            }
        }
    } else {
        if ((answer === "X")) {
            Correct = "Correct";
            ColorFeedback = "green";
        } else {
            Correct = "Incorrect";
            ColorFeedback = "red";
        }
    }
    
    Feedback.setColor(new util.Color(ColorFeedback));
    Feedback.setText(Correct);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(Feedback);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback* updates
    if (t >= 0.0 && Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback.tStart = t;  // (not accounting for frame time here)
      Feedback.frameNStart = frameN;  // exact frame index
      
      Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var blankscreen_2Components;
function blankscreen_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'blankscreen_2'-------
    t = 0;
    blankscreen_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankscreen_2Components = [];
    blankscreen_2Components.push(text_5);
    
    blankscreen_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function blankscreen_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'blankscreen_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = blankscreen_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankscreen_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankscreen_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'blankscreen_2'-------
    blankscreen_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
