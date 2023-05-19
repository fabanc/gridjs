import { h } from 'preact';
import { Row } from 'gridjs';
import { Cell } from 'gridjs';
interface RowSelectionProps {
    row?: Row;
    cell?: Cell;
}
export declare function RowSelectionSingle(props: RowSelectionProps): h.JSX.Element;
export declare function RowSelectionMultiple(props: RowSelectionProps): h.JSX.Element;
export declare function RowSelection(props: RowSelectionProps): h.JSX.Element;
export declare function RowSelectionCore(props: RowSelectionProps, singleSelect?: boolean): h.JSX.Element;
export {};
