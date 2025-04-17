import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/social-share-ui.js',
      format: 'umd',
      name: 'SocialShareUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    {
      file: 'dist/social-share-ui.esm.js',
      format: 'es'
    }
  ],
  external: [
    'react', 
    'react-dom',
    '@radix-ui/react-dialog',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'lucide-react'
  ],
  plugins: [
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      extract: 'social-share-ui.css',
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true
    }),
    terser()
  ]
};