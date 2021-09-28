import 'element-plus/lib/theme-chalk/base.css';
import {
  ElForm, ElFormItem, ElRow, ElCol, ElInput, ElButton,
  ElIcon, ElContainer, ElHeader, ElAside, ElMain,
  ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu,
  ElTable, ElTableColumn, ElPagination,
} from 'element-plus';

export default function (app) {
  app.component(ElForm.name, ElForm);
  app.component(ElFormItem.name, ElFormItem);
  app.component(ElRow.name, ElRow);
  app.component(ElCol.name, ElCol);
  app.component(ElInput.name, ElInput);
  app.component(ElButton.name, ElButton);
  app.component(ElIcon.name, ElIcon);
  app.component(ElTable.name, ElTable);
  app.component(ElTableColumn.name, ElTableColumn);
  app.component(ElPagination.name, ElPagination);
  app.component(ElContainer.name, ElContainer);
  app.component(ElHeader.name, ElHeader);
  app.component(ElAside.name, ElAside);
  app.component(ElMain.name, ElMain);
  app.component(ElMenu.name, ElMenu);
  app.component(ElMenuItem.name, ElMenuItem);
  app.component(ElMenuItemGroup.name, ElMenuItemGroup);
  app.component(ElSubmenu.name, ElSubmenu);
}
