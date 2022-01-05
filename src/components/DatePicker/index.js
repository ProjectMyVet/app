import React from 'react'
import { MVText } from '../../components'
import DatePicker from 'react-native-datepicker'
import styles from './styles'
import { COLORS } from '../../constants'

export function MVDatePicker(props) {
    const { label, mode, ...otherProps } = props
    return (
        <>
            <MVText style={styles.datePickerLabel}>{label}</MVText>
            <DatePicker
                {...otherProps}
                style={styles.datePickerStyle}
                placeholder='select date'
                mode={mode}
                format={mode == 'date' ? 'DD-MM-YYYY' : 'DD-MM-YYYY HH:mm'}
                confirmBtnText='Confirmar'
                cancelBtnText='Cancelar'
                useNativeDriver={true}
                customStyles={{
                        dateIcon: {
                        display: 'none',
                    },
                    dateInput: {
                        alignItems: 'center',
                        borderColor: COLORS.WHITE,
                        borderBottomColor: COLORS.BLACK,
                        marginTop: 10,
                        color: COLORS.DIM_GRAY,
                    },
                }}
            />
      </>
    )
}