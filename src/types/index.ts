export interface Section {
  id: string;
  title: string;
  content: string;
  type: 'custom' | 'predefined';
  isHeading?: boolean;
  isEditing?: boolean;
  showTitle?: boolean;
}

export interface Template {
  id: string;
  name: string;
  sections: Section[];
  createdAt: Date;
}