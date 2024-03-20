import { Typography } from 'antd';
import FieldTable from '@/components/table/FieldTable';
import RelationTable from '@/components/table/RelationTable';

export interface Props {
  displayName: string;
  referenceName: string;
  sourceTableName: string;
  fields: any[];
  calculatedFields: any[];
  relations: any[];
  properties: Record<string, any>;
}

export default function ModelMetadata(props: Props) {
  const { referenceName, fields = [], relations = [] } = props || {};

  return (
    <>
      <div className="mb-6">
        <Typography.Text className="d-block gray-7 mb-2">Name</Typography.Text>
        <div>{referenceName || '-'}</div>
      </div>

      <div className="mb-6">
        <Typography.Text className="d-block gray-7 mb-2">
          Fields ({fields.length})
        </Typography.Text>
        <FieldTable dataSource={fields} />
      </div>

      <div className="mb-6">
        <Typography.Text className="d-block gray-7 mb-2">
          Relations ({relations.length})
        </Typography.Text>
        <RelationTable dataSource={relations} />
      </div>
    </>
  );
}