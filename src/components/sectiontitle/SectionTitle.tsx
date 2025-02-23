import './SectionTitle.css'
const SectionTitle=({title}:{title:string})=>{
    return (
        <div className="section_title_container">
            <div className='stickpad'/>
            <span>{title}</span>
        </div>
    )
}
export default SectionTitle;