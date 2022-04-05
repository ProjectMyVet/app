import React from 'react'

export function getAttendanceTypeLabel(turn) {
    switch (turn) {
        case 'VACCINE':
            return 'Vacina'
        case 'APPOINTMENT':
            return 'Consulta'
        default:
            break;
    }
}