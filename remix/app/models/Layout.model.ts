export interface Layout {
  width: number;
  title: string;
  header: boolean;
  footer: boolean;
  body: Body;
}

interface Body {
  rows: Row[];
}

interface Row {
  columns: Column[];
}

interface Column {
  containers: Container[];
  widthPercent: number;
  leftOffset: number;
  styleClass: string;
  width: number;
}

interface Container {
  identifier: string;
  uuid: string;
}
