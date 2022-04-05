import React from 'react'

export function getAttendanceStatusLabel(turn) {
    switch (turn) {
        case 'REQUESTED':
            return 'Solicitado'
        case 'CONFIRMED':
            return 'Confirmado'
        case 'CANCELLED':
            return 'Cancelado'
        case 'FINISHED':
            return 'Finalizado'
        case 'EVALUATED':
            return 'Avaliado'
        default:
            break;
    }
}