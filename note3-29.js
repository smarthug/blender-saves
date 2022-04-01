// 03.29


// 버텍스 사이를 더블클릭(3button) / 둘레를 Alt + 왼클릭 (기본모드)

// Pivot point : 3D viewport 가운데 위쪽에 아이콘
// 단축키 : .
// edit, object 모드 확인하고 모델링 수정

// Set Parent : 오브젝트 다중클릭하고 기준으로 잡을 오브젝트를 마지막에 선택 뒤에 Ctrl + P - object(keep transform)
// Clear Parent : 오브젝트 선택 후에 Alt + P - clear parent

// Material 추가 : Properties 탭 - 왼쪽의 material 아이콘 - new
// 혹은 shader 탭에서 오브젝트 선택 후 new
// Principled BSDF, material Output 노드(쉐이더 에디터의 네모칸 데이터)
// Base color - HSV
// HDRI(High Dynamic Range Image)
// 뷰의 종류 : wireframe, solid, material preview, rendered

// 저장 : crrl S, 다른이름으로 저장 : Shift Ctrl S 한 뒤 넘버패드 + 누르면 파일 이름에 번호생성
// 많아진 메터리얼 삭제하기
// Outliner tap - 오른쪽 아이콘 누르고 blender file - material - 우클릭 - delete
// 작업 탭에서 Ctrl + Space bar : 해당 작업탭만 크게 보기. 한 번 더 누르면 원래대로 돌아옴
// VIew - viewport render image : 내가 보는 시점 그대로 이미지 렌더 (확인용)
// Solid view - Lighting - Studio, Matcap : 모델링 체크가능
// Cavity : 모델링 체크 가능

// Linked select : 마우스 커서 올려놓고 L
// 구간 선택 후 Ctrl+, Ctrl- : 위아레 구간 다중 선택, 해제
// 오브젝트 다중 선택 후 Crtl J : 오브젝트 합치기 
// edit mode 에서 원하는 부분 선택 후 P : seperate
// by selection, material, loose parts

// Delete
// 원하는 부분 선택 후 X - vertices, edges, faces 선택
// 선택하는 메뉴에 따라 결과 달라짐.
// Dissolve edges - 선 디졸브. 형태 유지
// 단축기 ctrl X (edge selection 모드에서 해야함)
// 디졸브 엣지 할 때, 하는 엣지들 사이에 선택된 거 있는지 확인
// (버텍스, 엣지 셀렉트 모드 확인)
// F(Fill) : 채우기. 채울 부분 주변을 선택 후 F
// 버텍스 두 개 선택하고 Fill 하면 엣지 생김.
// 채워져 있는 면 안에서 Fill로 엣지를 만들면 안된다(오류 발생). J로 생성 가능.
// M(merge) : center, first, last, collapse, by distance