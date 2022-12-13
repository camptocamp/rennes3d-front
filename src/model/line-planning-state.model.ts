export class LinePlanningStateTypes {
  static readonly UNSTARTED = new LinePlanningStateTypes(
    'unStarted',
    'Non commencé',
    '#858585',
    '#bebebe'
  )
  static readonly UNDER_CONSTRUCTION = new LinePlanningStateTypes(
    'underConstruction',
    'En travaux',
    '#F43F5E',
    '#FDA4AF'
  )
  static readonly CONSTRUCTION_FINISHED = new LinePlanningStateTypes(
    'constructionFinished',
    'Travaux finalisés',
    '#FACC15',
    '#FEF08A'
  )
  static readonly COMMISIONING = new LinePlanningStateTypes(
    'commisioning',
    'Mise en service',
    '#65A30D',
    '#BEF264'
  )

  // private to disallow creating other instances of this type
  private constructor(
    public readonly owsValue: string,
    public readonly prettyPrintValue: string,
    public readonly color: string,
    public readonly deemphasizedColor: string
  ) {}

  toString() {
    return this.prettyPrintValue
  }
}
