import React from "react";
import styles from "./patient-card.module.scss";
import { Patient } from "@feats/patients/entities";
import { formatBirthdayWithAge } from "@core/utils/fomatters/date-formatter";

export type PatientCardProps = {
    patient: Patient
}

export const PatientCard: React.FC<PatientCardProps> = ({patient}) => {
    return <div className={ styles.card }>
        <div className={ styles.name }>{ patient.name }</div>
        <div className={styles.row}>
            <div className={styles.label}>Дата рождения</div>
            <div className={styles.value}>{ formatBirthdayWithAge(patient.birthday) }</div>
        </div>
        {
            patient.consultations && <div className={styles.row}>
                <div className={styles.label}>Консультации</div>
                <div className={styles.value}>{patient.consultations!.replaceAll("\n", ", ")}</div>
            </div>
        }
        {
            patient.diagnosis && <div className={styles.row}>
                <div className={styles.label}>Диагнозы</div>
                <div className={styles.value}>{patient.diagnosis!.replaceAll("\n", ", ")}</div>
            </div>
        }
        {
            patient.operations && <div className={styles.row}>
                <div className={styles.label}>Диагнозы</div>
                <div className={styles.value}>{patient.operations!.replaceAll("\n", ", ")}</div>
            </div>
        }
    </div>
}