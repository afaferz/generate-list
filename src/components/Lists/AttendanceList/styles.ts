import styled from 'styled-components'

interface ListPageProps {
    isVisible: boolean;
}

export const ListPage = styled.div<ListPageProps>`
    border: 1px solid black;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    max-width: 650px;
    min-height: 90vh;
    width: 100%;
    .page-number__box {
        display: inline-flex;
        margin: 1em;
        justify-content: end;
        .page-number {
            padding: 1em;
        }
    }
    @media print {
        page-break-after: always;
        display: flex;
    }
`
export const ListHeader = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .logo__box {
        border: 1px solid black;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        margin: 1em;
    }
`

export const ListSubheader = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: grid;
    grid-template-areas:
		"institution institution departament departament"
        "event event date shift"
    ;
    .subheader__item {
        padding: 6px;
    }
    .subheader__label {
        font-weight: bold;
    }
    .institution {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        grid-area: institution;
    }
    .event {
        border-right: 1px solid black;
        grid-area: event;
    }
    .departament {
        border-bottom: 1px solid black;
        grid-area: departament;
    }
    .date {
        border-right: 1px solid black;
        grid-area: date;
    }
    .shift {
        grid-area: shift;
    }
`

export const ListTable = styled.table`
    border-collapse: collapse;
    margin: 2.5em 10px;
    text-align: center;
    thead > tr > th {
        background-color: grey;
        border: 1px solid black;
        &:first-child {
            width: 2.5em;
        }
        &:nth-child(2), &:nth-child(3) {
            width: 45%;
        }
    }
    tbody > tr > td {
        border: 1px solid black;
        &:first-child {
            width: 2.5em;
        }
        &:nth-child(2), &:nth-child(3) {
            width: 45%;
        }
    }
`