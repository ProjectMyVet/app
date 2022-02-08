import React from 'react'

export function getTurnLabel(turn) {
    switch (turn) {
        case 'AFTERNOON':
            return 'Tarde'
        case 'MORNING':
            return 'Manhã'
        case 'NIGHT':
            return 'Noite'
        default:
            break;
    }
}