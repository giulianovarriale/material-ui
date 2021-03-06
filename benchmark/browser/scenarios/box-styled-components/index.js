import * as React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { styleFunction } from '@material-ui/core/Box';
import styledComponents, {
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';
import { logReactMetrics } from '../utils';

const materialSystemTheme = createMuiTheme();
const BoxStyleComponents = styledComponents('div')(styleFunction);

export default function BoxStyledComponents() {
  return (
    <React.Profiler id="box-styled-components" onRender={logReactMetrics}>
      {new Array(1000).fill().map(() => (
        <StyledComponentsThemeProvider theme={materialSystemTheme}>
          <BoxStyleComponents
            color="primary.main"
            bgcolor="background.paper"
            fontFamily="h6.fontFamily"
            fontSize={['h6.fontSize', 'h4.fontSize', 'h3.fontSize']}
            p={[2, 3, 4]}
          >
            styled-components
          </BoxStyleComponents>
        </StyledComponentsThemeProvider>
      ))}
    </React.Profiler>
  );
}
