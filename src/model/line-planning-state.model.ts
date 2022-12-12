export class LinePlanningStateTypes {
  static readonly UNSTARTED = new LinePlanningStateTypes(
    'unStarted',
    'Non commencé',
    '#FFFFFF'
  )
  static readonly UNDER_CONSTRUCTION = new LinePlanningStateTypes(
    'underConstruction',
    'En travaux',
    '#F43F5E'
  )
  static readonly CONSTRUCTION_FINISHED = new LinePlanningStateTypes(
    'constructionFinished',
    'Travaux finalisés',
    '#FACC15'
  )
  static readonly COMMISIONING = new LinePlanningStateTypes(
    'commisioning',
    'Mise en service',
    '#65A30D'
  )

  // private to disallow creating other instances of this type
  private constructor(
    public readonly owsValue: string,
    public readonly prettyPrintValue: string,
    public readonly color: string
  ) {}

  toString() {
    return this.prettyPrintValue
  }
}
