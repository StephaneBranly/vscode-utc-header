import { basename } from 'path'
import vscode = require('vscode')
import moment = require('moment')

import {
  TextEdit, TextDocument, Position, Range
} from 'vscode'

import {
  extractHeader, renderHeader,
  supportsLanguage, HeaderInfo
} from './header'

/**
 * Return current user from config or ENV by default
 */
const getCurrentUser = () =>
  vscode.workspace.getConfiguration()
    .get('utcheader.username') || process.env['USER'] || 'branlyst'

/**
 * Return current user mail from config or default value
 */
const getCurrentUserMail = () =>
  vscode.workspace.getConfiguration()
    .get('utcheader.email') || `${getCurrentUser()}@etu.utc.fr`

/**
 * Return current git from config
 */
 const getCurrentGit = () =>
  vscode.workspace.getConfiguration()
    .get('utcheader.git') || ''
    
/**
 * Update HeaderInfo with last update author and date, and update filename
 * Returns a fresh new HeaderInfo if none was passed
 */
const newHeaderInfo = (document: TextDocument, headerInfo?: HeaderInfo) => {
  const user = getCurrentUser()
  const mail = getCurrentUserMail()
  const git = getCurrentGit()
  console.log("new header info");
  console.log("git="+git);
  return Object.assign({},
    // This will be overwritten if headerInfo is not null
    {
      createdAt: moment(),
      createdBy: user
    },
    headerInfo,
    {
      filename: basename(document.fileName),
      author: `${user} <${mail}>`,
      git: git,
      updatedBy: user,
      updatedAt: moment()
    }
  )
}

/**
 * `insertHeader` Command Handler
 */
const insertHeaderHandler = () => {
  console.log("insert header handler");
  const { activeTextEditor } = vscode.window
  const { document } = activeTextEditor

  if (supportsLanguage(document.languageId))
  {
    console.log("supported language");
    activeTextEditor.edit(editor => {
    const currentHeader = extractHeader(document.getText())
    if (currentHeader)
    {
      console.log("current header exists");
      editor.replace(
        new Range(0, 0, 14, 0),
        renderHeader(
          document.languageId,
          newHeaderInfo(document)
        ) 
      )
    }
    else
    {
      console.log("no current header");
      console.log(
        newHeaderInfo(document)
      );
      editor.insert(
        new Position(0, 0),
        renderHeader(
          document.languageId,
          newHeaderInfo(document)
        )
      )
    }
      
  })
  }
    
  else
    vscode.window.showInformationMessage(
      `No header support for language ${document.languageId}`
    )
}

/**
 * Start watcher for document save to update current header
 */
const startUpdateOnSaveWatcher = (subscriptions: vscode.Disposable[]) =>
  vscode.workspace.onWillSaveTextDocument(event => {
    const document = event.document
    const currentHeader = extractHeader(document.getText())

    event.waitUntil(
      Promise.resolve(
        supportsLanguage(document.languageId) && currentHeader ?
          [
            TextEdit.replace(
              new Range(0, 0, 14, 0),
              renderHeader(
                document.languageId,
                newHeaderInfo(document)
              )
            )
          ]
          : [] // No TextEdit to apply
      )
    )
  },
    null, subscriptions
  )


export const activate = (context: vscode.ExtensionContext) => {
  const disposable = vscode.commands
    .registerTextEditorCommand('utcheader.insertHeader', insertHeaderHandler)
  context.subscriptions.push(disposable)
  startUpdateOnSaveWatcher(context.subscriptions)
}
