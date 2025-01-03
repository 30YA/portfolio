import React, { type ReactElement } from 'react';

import ProjectsModule, { ProjectsMetaData } from '@/modules/projects';

export const metadata = ProjectsMetaData;

export default function Projects(): ReactElement {
  return <ProjectsModule />;
}
