import { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../projectData'
import { TOTAL, pad, projectNumber } from '../format'
import Inline from './Inline'
import Page from './Page'
import Section from './Section'

const letter = i => String.fromCharCode(65 + i) // 0 -> "A"

// Overview as structured content: a lead sentence, then lettered run-in
// headings over dash lists or prose, closing with the Tech Stack spec table.
function Overview({ overview }) {
  const { lead, groups, specs } = overview

  return (
    <div className="measure overview">
      <p className="lead"><Inline text={lead} /></p>

      {groups.map((group, i) => (
        <Fragment key={group.title}>
          <h3 className="sub"><span className="k">{letter(i)}</span>{group.title}</h3>
          {group.body && <p className="body"><Inline text={group.body} /></p>}
          {group.items && (
            <ul className="dash body">
              {group.items.map(item => <li key={item}><Inline text={item} /></li>)}
            </ul>
          )}
        </Fragment>
      ))}

      {specs.length > 0 && (
        <>
          <h3 className="sub"><span className="k">{letter(groups.length)}</span>Tech Stack</h3>
          <dl className="spec body">
            {specs.map(spec => (
              <Fragment key={spec.key}>
                <dt>{spec.key}</dt>
                <dd><Inline text={spec.value} /></dd>
              </Fragment>
            ))}
          </dl>
        </>
      )}
    </div>
  )
}

function DetailPage({ counter, backLabel, children }) {
  const back = label => <Link to="/" className="link label ink">{label}</Link>
  const count = <span className="label num">{counter}</span>

  return (
    <Page
      stripLeft={back('← Back to Home')}
      stripRight={count}
      footLeft={back(backLabel)}
      footRight={count}
    >
      {children}
    </Page>
  )
}

// Not-found and coming-soon screens share one layout
function Placeholder({ title, message }) {
  return (
    <DetailPage counter={`Projects · ${TOTAL}`} backLabel="← Back to All Projects">
      <div className="dt-hdr">
        <h1 className="h1 dt-title">{title}</h1>
        <div className="empty">
          <span className="label">Result · 0 of {TOTAL}</span>
          <p className="h3">{message}</p>
          <Link to="/" className="btn">Show all projects</Link>
        </div>
      </div>
    </DetailPage>
  )
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === Number(id))

  if (!project) {
    return <Placeholder title="Project not found" message="There is no project at this address." />
  }

  if (project.comingSoon) {
    return <Placeholder title={project.title} message="Details for this project are still being written." />
  }

  const { title, meta, tags, liveUrl, repoUrl, overview, challenge, solution, results, images } = project

  return (
    <DetailPage
      counter={`Project ${projectNumber(project)} / ${TOTAL}`}
      backLabel="← Back to All Projects"
    >
      <header className="dt-hdr">
        <h1 className="h1 dt-title">{title}</h1>

        <div className="tb">
          {meta.map(item => (
            <div key={item}><span className="meta ink">{item}</span></div>
          ))}
          <div className="wide">
            <span className="label">Tags</span>
            <ul className="tb-tags plain-list">
              {tags.map(tag => <li key={tag} className="tag">{tag}</li>)}
            </ul>
          </div>
        </div>

        {(liveUrl || repoUrl) && (
          <div className="btn-row">
            {liveUrl && (
              <a className="btn btn--primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Site <span aria-hidden="true">↗</span>
              </a>
            )}
            {repoUrl && (
              <a className="btn" href={repoUrl} target="_blank" rel="noopener noreferrer">
                View Source <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </header>

      <Section no="01" title="Overview">
        <Overview overview={overview} />
      </Section>

      <Section no="02" title="Challenge">
        <p className="body measure">{challenge}</p>
      </Section>

      <Section no="03" title="Solution">
        <p className="body measure">{solution}</p>
      </Section>

      <Section no="04" title="Key Results">
        <ol className="results body measure">
          {results.map((result, i) => (
            <li key={result}>
              <span className="i num">{pad(i + 1)}</span>
              <span>{result}</span>
            </li>
          ))}
        </ol>
      </Section>

      {images.length > 0 && (
        <Section no="05" title="Screenshots">
          <div className="shots measure">
            {images.map((src, i) => (
              <figure key={src} className="shot">
                <img src={src} alt={`${title} — screenshot ${i + 1} of ${images.length}`} />
                <figcaption className="label num">
                  Screenshot · {pad(i + 1)} / {pad(images.length)}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}
    </DetailPage>
  )
}

export default ProjectDetail
