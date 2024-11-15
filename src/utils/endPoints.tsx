const adminPrefix = '/admin'

export const endPoints = {
    get_all_stops: `${adminPrefix}/get_all_stops`,
    toggle_stop_status: `${adminPrefix}/toggle_stop_status/`,
    manage_bookings: `${adminPrefix}/manage_bookings/`,
    review_booking: `${adminPrefix}/review_booking/`
}