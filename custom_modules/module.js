const Passenger = require('./passenger')
const Ticket = require('./ticket')
const Train = require('./train')

exports.Passenger = Passenger.Passenger
exports.findPass = Passenger.findPass
exports.buyTicket = Ticket.buyTicket
exports.Ticket = Ticket.Ticket
exports.Train = Train.Train
exports.sellsTickets = Train.sellsTickets
