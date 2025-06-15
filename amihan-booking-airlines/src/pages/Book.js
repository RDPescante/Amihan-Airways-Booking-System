import { useState } from 'react'
import { Plane } from 'lucide-react'
import DateSelector from '../components/DateSelector'
import FlightCard from '../components/FlightCard'

const Book = () => {
  const [selectedDepartDate, setSelectedDepartDate] = useState('TUE 20 May')
  const [selectedReturnDate, setSelectedReturnDate] = useState('TUE 20 May')

  const departDates = [
    { day: 'SUN 18 May', price: null, label: 'NO FLIGHTS' },
    { day: 'MON 19 May', price: 'PHP 3,000', label: 'PHP 3,000' },
    { day: 'TUE 20 May', price: 'PHP 4,000', label: 'PHP 4,000' },
    { day: 'WED 21 May', price: null, label: 'NO FLIGHTS' },
    { day: 'THURS 22 May', price: null, label: 'NO FLIGHTS' }
  ]

  const returnDates = [
    { day: 'SUN 18 MAY', price: null, label: 'NO FLIGHTS' },
    { day: 'MON 19 MAY', price: 'PHP 3,000', label: 'PHP 3,000' },
    { day: 'TUE 20 MAY', price: 'PHP 4,000', label: 'PHP 4,000' },
    { day: 'WED 21 MAY', price: null, label: 'NO FLIGHTS' },
    { day: 'THURS 22 MAY', price: null, label: 'NO FLIGHTS' }
  ]

  const departFlights = [
    {
      departTime: '12:55 PM',
      arriveTime: '02:10 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 15m',
      flightNumber: 'SJ 326',
      price: 'PHP 8,796.76',
      airline: 'Cebu Pacific'
    },
    {
      departTime: '03:05 PM',
      arriveTime: '04:25 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 20m',
      flightNumber: 'SJ 328',
      price: 'PHP 8,796.76',
      airline: 'Cebu Pacific'
    },
    {
      departTime: '06:35 PM',
      arriveTime: '07:55 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 20m',
      flightNumber: 'SJ 320',
      price: 'PHP 7,799.96',
      airline: 'Cebu Pacific',
      seatsLeft: '5 seats left at this price'
    },
    {
      departTime: '06:35 PM',
      arriveTime: '07:55 PM',
      departCode: 'DRP',
      arriveCode: 'CEB',
      duration: '1h 20m',
      flightNumber: 'DG 6207',
      price: 'PHP 13,239.68',
      airline: 'Philippines Airlines'
    },
    {
      departTime: '09:20 PM',
      arriveTime: '10:50 PM',
      departCode: 'CEB',
      arriveCode: 'MNL',
      duration: '1h 30m',
      flightNumber: 'SJ 574',
      price: 'PHP 13,239.68',
      airline: 'Cebu Pacific'
    }
  ]

  const returnFlights = [
    {
      departTime: '12:55 PM',
      arriveTime: '02:10 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 15m',
      flightNumber: 'SJ 326',
      price: 'PHP 8,796.76',
      airline: 'Cebu Pacific'
    },
    {
      departTime: '03:05 PM',
      arriveTime: '04:25 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 20m',
      flightNumber: 'SJ 328',
      price: 'PHP 8,796.76',
      airline: 'Cebu Pacific'
    },
    {
      departTime: '06:35 PM',
      arriveTime: '07:55 PM',
      departCode: 'DRP',
      arriveCode: 'MNL',
      duration: '1h 20m',
      flightNumber: 'SJ 320',
      price: 'PHP 7,799.96',
      airline: 'Cebu Pacific',
      seatsLeft: '5 seats left at this price'
    },
    {
      departTime: '06:35 PM',
      arriveTime: '07:55 PM',
      departCode: 'DRP',
      arriveCode: 'CEB',
      duration: '1h 20m',
      flightNumber: 'DG 6207',
      price: 'PHP 13,239.68',
      airline: 'Philippines Airlines'
    },
    {
      departTime: '09:20 PM',
      arriveTime: '10:50 PM',
      departCode: 'CEB',
      arriveCode: 'MNL',
      duration: '1h 30m',
      flightNumber: 'SJ 574',
      price: 'PHP 13,239.68',
      airline: 'Cebu Pacific'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-5">
      <div className="max-w-4xl mx-auto">
        {/* Departing Flights Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
          <h4 className="fw-bold text-uppercase">Select Your Departing Flight</h4>
          <h2 className="text-primary">MNL ✈ BCD</h2>
          </div>
          
          <DateSelector
            dates={departDates}
            selectedDate={selectedDepartDate}
            onDateSelect={setSelectedDepartDate}
            title=""
          />

          <div className="space-y-3">
            {departFlights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
          </div>
        </div>

        {/* Returning Flights Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
              <h4 className="fw-bold text-uppercase">Select Your Return Flight</h4>
        <h2 className="text-primary">BCD ✈ MNL</h2>
          </div>
          
          <DateSelector
            dates={returnDates}
            selectedDate={selectedReturnDate}
            onDateSelect={setSelectedReturnDate}
            title=""
          />

          <div className="space-y-3">
            {returnFlights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book

