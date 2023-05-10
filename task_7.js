'use strict'

const mod = require('./custom_module')

const Passengers = [new mod.Passenger('Orest', 1, 42134), new mod.Passenger('Bodya', 5, 51241),
  new mod.Passenger('Igor', 12, 54213), new mod.Passenger('Oleg', undefined, 432234)]

const Tickets = [new mod.Ticket(10, 3, new Date(2023, 8, 12, 10, 30), 99),
  new mod.Ticket(5, 4, new Date(2023, 1, 11, 10, 30), 99),
  new mod.Ticket(14, 2, new Date(2023, 6, 34, 10, 30), 99),
  new mod.Ticket(23, 1, new Date(2023, 45, 12, 10, 30), 99),
  new mod.Ticket(23, 3, new Date(2023, 25, 13, 10, 30), 99),
  new mod.Ticket(26, 2, new Date(2023, 25, 10, 10, 30), 99)]

const Trains = [new mod.Train(1, 8, 33), new mod.Train(2, 12, 13),
  new mod.Train(3, 6, 17), new mod.Train(4, 4, 15)]


console.log('\nAdd a new passenger')

const addNewPass = (pass) => {
  Passengers.push(pass)
}

console.log(Passengers)

addNewPass(new mod.Passenger('David', 3, 61237))

console.log(Passengers)


console.log('\nEditpassenger')

const newInfoPass = (pass, ticket, document) => {
  pass.ticket = ticket
  pass.document = document
}

console.log(Passengers[0])

newInfoPass(Passengers[0], 2, 72136)

console.log(Passengers[0])


console.log('\nDelete passenger')

const deletePassenger = (pass) => {
  Passengers.forEach((value, index, array) => {
    if (pass.name === value.name &&
            pass.ticket === value.ticket &&
            pass.document === value.document) array.splice(index, 1)
  })
}

console.log(Passengers)

deletePassenger(Passengers[2])

console.log(Passengers)


console.log('\nSearch for one passenger')

mod.findPass(Passengers, Passengers[0])


console.log('\nAdd a new train')

const addNewTrain = (train) => {
  Trains.push(train)
}

console.log(Trains)

addNewTrain(new mod.Train(12, 57, 13))

console.log(Trains)

console.log('\nEdit train')

const editTrain = (train, newWagons, newWay) => {
  train.wagons = newWagons
  train.way = newWay
}

editTrain(Trains[2], 12, 10)
console.log(Trains)


console.log('\nDelete train')

const deleteTrain = (train) => {
  Trains.forEach((value, index, array) => {
    if (train.number === value.number &&
            train.wagons === value.wagons &&
            train.way === value.way) array.splice(index, 1)
  })
}

deleteTrain(Trains[0])

console.log(Trains)


console.log('\nSearch for one train')

const findTrain = (train) => {
  let oveTrain

  Trains.forEach((value, index) => {
    if (value.number === train.number &&
            value.wagons === train.wagons &&
            value.way === train.way) oveTrain = value
  })
  if (oveTrain !== undefined) console.log(`Train №${train.number} with path ${train.way}`)
  else console.log('Such train does not exist')
}

findTrain(Trains[3])

console.log('\nPurchase of a train ticket by a passenger')

mod.buyTicket(Passengers, Passengers[3], Tickets[0])


console.log('\nChanging a ticket from one train to another')

const changeTicket = (pass, ticket) => {
  const oldTicket = pass.ticket
  pass.ticket = ticket.number
  if (oldTicket === ticket.number) console.log('Tickets are same. Pick anouther one. ')
  else console.log(`Passenger ${pass.name} changes ticket №${oldTicket} to ticket №${pass.ticket}!`)
}

changeTicket(Passengers[2], Tickets[0])

console.log('\nCancellation of ticket purchase')
const cancelTicket = (pass) => {
  const oldTicket = pass.ticket
  pass.ticket = undefined
  if (oldTicket === undefined) console.log(`Passenger ${pass.name} doesn't have a ticket.`)
  else console.log(`Passenger ${pass.name} cancelled ticket № ${oldTicket}`)
  console.log(pass)
}

cancelTicket(Passengers[0])


console.log('\nSearch for the train for which the most/least tickets were sold')

mod.sellsTickets(Trains, Trains, Tickets)
