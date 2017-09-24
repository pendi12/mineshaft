# Evo - Adaptable Development
Rapid Internet Application development with Fullstack Javascript. 

### Serverless Applications powerd by Frontend Design
Evo's will provide a secure frontend environment, delegating computational intensive/complex requests safely.

From a technical perspective, the Evo interface is responsbile for dispatching resource requests. At the moment Firebase Functions, but other infrastructure(s), particulary those related to cryptocurrency will be added as Store Department and Component/Container bundles.

# Computation Resource Management
Imagine with me for a moment that "1 penny = 1 CPU cycle". Everytime we frivilously execute code, we had to spend a penny, sometimes several. Now, a penny isn't a lot, but we're talking about CPU cyles here... Those add up real quick. 

It would be in our best interest to limit the amount (and size) of unnecessary requests dispatched from our Application Frontend to this expensive CPU cycle machine. We might achieve this elegance by relying on local storage and Serivce Workers to act as request middleware, aggresively reading/write database in local storage, before pinging external resource requests are ever made.

The objective might be to include ready-to-go stategies for mitgigating computation costs, by aligning the Application's Frontend Action/Reducer/Saga with ServiceWorks/WebAssembly middleware to minimize computation request to backends infrastructure. A ServiceWorker could facilitate reconcillation between the Frontend Interface and the Backend's Computation Resource Management Strategy via manual requests and automated settings.

Thankfully we don't pay 1 penny for 1 penny CPU cycle. However, interacting on distributed blockchains does cost signficantly more, which will get into later.

## Request Fulfillment
An external system (especially distributed) is not bound to fulfill a request.

### How It Works
*Interface:* The interface utilizes Redux/Sagas to track the lifecycle of each request sent via an application's interface. 

The Application Frontend manages State and the Computation Request using the ```[ENTITY]_[ACTION]_[STATUS]``` Redux action template.
[ENTITY] is the Store Department.
[ACTION] is requested feature.
[STATUS] is the current [ACTION]'s lifecyle state: request, success or failure.

### Redux + Sagas

```
[ENTITY]_[ACTION]_[STATUS]

[ENTITY]: [
  APOLLO,
  AUTH,
  DATABASE,
  ...
]
[ACTION]: [
  QUERY,
  LOGIN,
  READ,
  ...
]
[STATUS]: [
  REQUEST,
  SUCCESS,
  FAILURE,
  ....
```
```
export const APOLLO_QUERY_REQUEST = 'APOLLO_QUERY_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const DATABASE_READ_FAILURE = 'DATABASE_READ_FAILURE'
```

### What's Really Happening
A variety of actions are dispatched from the Application Frontend, which require a complex range of responses and computational requirements.

For example "local" Redux Store Department like dialog, popover and snackbar. All of which require only a few simple actions/reducers to complete. Plus, all the side-effects stay within Browser's Javascript engine.

The *Theme* Redux Store Department is an advanced "local" Redux Store Department, managing a diverse series of application layouts. The initialState contains default layout settings for Zones, Regions, Areas and Components on application load.

Application Redux Store Departments include authentication, database and storage. The complex Store Departments handle asyncronous computation via Redux Sagas and in the future RX Observables. The action/reducer/saga chains will reconconile frontend state with backend state by interacting with the database and/or cloud functions.

Serverless Redux Store Departments include sms, voice and chat. Serverless Redux Store Departments minimize exposure of sensitive business operations/keys/logic by initializing computations in a serverless architecture via CloudFunction/MicroService/SmartContract operations.

# Redux
Manage the interface state with Redux, Redux Saga and soon Redux Observables.

## Store Departments
```
store = {
  authentication
  database
  dialog
  form
  layers
  map
  mining
  notifications
  popover
  sms
  theme
  voice
}
```
The Store is divided into Departments. User request are fulfilled by dispatching requests to each Store Department. Depending on the complexity of the request, the dispatch may contain ```payload``` and ```metadata``` information.

Generally the Store Department Saga will handle all the details of catching requests, dispatching additional actions and ultimately facilitating smooth state transformations. 

## Backend (JSON) Tree Storage
```
graphTree = {
  user: {
    activity
    authentication
    identity
    tasks
    relationshops
    availability
    ideas
  }
  community: {
    activity
    people
    tasks
    organizations
    resources
  }
  infrastructure: {
    actions
    events
    objectives
  }
  mutate: {
    request
    response
  }
  volunteer: {
    hotline:{}
    chat:{}
  }
  permissions: {
    roles: {}
    actions: {}
  }
}
```

#### Redux Store - Managing Application State
Evo uses Redux to manage the application state.

As single-page-application built with React components, application information is maintained using a modular component/department architecture. Essential application data (integers, arrays and objectives) are saved within the root level Redux Store. Application state/data is accesible from Layout/Component Containers, sequentially passed as props to sibling Traditional and Stateless Components

The term *Redux Store* is widely known, in contrast with the term *Redux Store Departments*, which is specific to Evo's architecture.

### Servlerless Department
When requesting computational resources from external services via an API or Smart Contract, the action must be negoiated across multiple application layers.

For example a dispatched action to send a text message, start an automated bot and/or generate a report with propitary data, all must pass through multuple stages of application infrastructure. 

The Serverless Store Department tracks dispatched actions across the Local State, Service Worker Caches, Database/CloudFunctions and Computation Node.

1. Action Dispatch matching SERVERLESS_[ACTION]_REQUEST template
2. Saga Starts SERVERLESS_[ACTION]_REQUEST lifecycle after observing dispatched action
3. Check Authentication with map.filter on auth.uid to permissions.actions.department
Authentication === Fail
1. Action Dispatch Failure Notifcation
Authentication === Pass 
1. Add SERVERLESS_[ACTION]_REQUEST to the database severless request log
2. Cloud Function initialized via mapping to real-time database serverless/request/:department


#### Theme Department

```
theme: {
  zones: {
    header: true,
    sidebar: true,
    main: true,
  },
  regions: {
    tabs: true,
    tray: true,
    panelLeft: true,
    panelRight: true,
  },
  sidebar: {
    layout: {
      mt: ['40px', '100px'],
      w: ['0', '170px', '300px']
    }
  },
  header: {
    layout: {
      h: ['40px', '80px'],
      p: ['5px 10px', '10px 15px']
    }
  },
  main: {
    layout: {
      w: ['100%', 'calc(100% - 170px)', 'calc(100% - 300px)'],
      mt: ['40px', '100px'],
      mb: ['40px', '10px'],
      ml: ['0', '40px', '200px'],
    },
    regions: {
      content: {
        enabled: true,
        mt: ['0'],
        mb: ['0'],
        ml: ['0'],
        w: ['100%'],
        areas: {
          left: {
            enabled: false,
            p: ['10']
          },
          center: {
            enabled: true,
            p: ['0']
          },
          right: {
            enabled: false,
            p: ['10']
          }
        }
      },
      tabs: {
        enabled: false,
        layout: {
          h: ['40px', '80px'],
          p: ['5px 10px', '10px 15px']
        }
      },
      tray: {
        enabled: false,
        mt: ['40px', '100px'],
        mb: ['40px', '20px'],
        w: ['0', '170px', '80px']
      },
    }
  },
}
  ``` 



## WebAssebmly - C++ Byte Code
But... really since, the Browser and Server wasn't enough... Javascript Developers will also start ~~stealing~~ borrowing the world's best/performant/secure byte code to run in our sizzling 🌶 🔥 Reactive/Functional/Immutable Web Applications 🦄 🤑 so watch out oldschool cool, here come the newtool gang!

Established C++ libraries, focused on security will be ported over to the applications running in the Browser, so Javascript developers can quickly and easily interact with compiled byte coding using ready-to-go service workers. By directly compiling C/C++ (.c/.cpp/.h) code into Browser ready WebAssembly (.wasm, .wast) significant improvements to common CPU intensive tasks can be more effectively managed.