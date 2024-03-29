import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../../data/dummy";

const Kanban = () => {
  console.log();
  return (
    <div className="cont mr-5">
      <h2 className="mt-5 mb-5">Tâches à réaliser</h2>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        {/*composant qui traite les taches => tableau d'objet*/}
        <ColumnsDirective>
          {/*composant qui traite les étapes des taches (à faire, en cours, test, fini) => tableau d'objet */}
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};
export default Kanban;
